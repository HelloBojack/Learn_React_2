// slr 快捷键
import React, { useState, useEffect, forwardRef } from 'react';
import {
  Form,
  Tag,
  Tooltip,
  Input
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './tagArea.css'

const TagsArea = ({ value, onChange }, ref) => {
  const [refresh, setRefresh] = useState(false);
  const [inputState, setInputState] = useState({
    tags: [],
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: '',
  })
  const tagsColorList = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'geekblue', 'purple']

  useEffect(() => {
    // if (inputState.tags.length) {
    let inputStateTemp = inputState
    inputStateTemp.tags = value.split(',').filter(i => i);
    setInputState(inputStateTemp)
    // }
    // console.log(value)
    refresh && setTimeout(() => setRefresh(false));
    // eslint-disable-next-line
  }, [refresh]);

  const triggerChange = changedValue => {
    if (onChange) {
      // console.log(changedValue)
      onChange(changedValue)
    }
  };

  const showInput = () => {
    let inputStateTemp = inputState
    inputStateTemp.inputVisible = true;
    setInputState(inputStateTemp)
    setRefresh(true)
    // console.log(inputRef)
  };
  const handleClose = removedTag => {
    // console.log(removedTag)
    let inputStateTemp = inputState
    inputStateTemp.tags = inputState.tags.filter(tag => tag !== removedTag);
    // console.log(inputStateTemp.tags)
    // console.log(inputStateTemp)
    setInputState(inputStateTemp)
    // setRefresh(true)
    // console.log(inputState)
    triggerChange(inputStateTemp.tags.join(','))
    // const tags = this.state.tags.filter(tag => tag !== removedTag);
  }
  const handleInputChange = e => {
    let inputStateTemp = inputState
    inputStateTemp.inputValue = e.target.value;
    setInputState(inputStateTemp)
    setRefresh(true)
  };
  const handleInputConfirm = () => {
    let { tags } = inputState;
    if (inputState.inputValue && tags.indexOf(inputState.inputValue) === -1) {
      tags = [...tags, inputState.inputValue];
    }
    setInputState({
      tags,
      inputValue: '',
      editInputIndex: -1,
      editInputValue: '',
      inputVisible: false,
    });
    // console.log(tags)
    triggerChange(tags.join(','))
    // value = tags.join(',')
  };
  const handleInputEdit = (e, index, tag) => {
    let inputStateTemp = inputState
    inputStateTemp.editInputIndex = index;
    inputStateTemp.editInputValue = tag;
    setInputState(inputStateTemp)
    e.preventDefault();
    setRefresh(true)
  }
  const handleEditInputChange = e => {
    let inputStateTemp = inputState
    inputStateTemp.editInputValue = e.target.value;
    setInputState(inputStateTemp)
    setRefresh(true)
  };
  const handleEditInputConfirm = () => {
    let { tags } = inputState;
    if (inputState.editInputValue && tags.indexOf(inputState.editInputValue) === -1) {
      tags[inputState.editInputIndex] = inputState.editInputValue;
    }
    // console.log(tags)
    setInputState({
      tags,
      inputValue: '',
      editInputIndex: -1,
      editInputValue: '',
      inputVisible: false,
    });
  };





  return <>
    <Form.Item>

      {inputState.tags.map((tag, index) => {
        if (index === inputState.editInputIndex) {
          return (
            <Input
              // ref={saveEditInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={inputState.editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }
        return tag.length > 10 ? (
          <Tooltip title={tag} key={tag}>
            <Tag
              style={{ userSelect: 'none' }}
              key={tag}
              color={tagsColorList[index % 10]}
              closable={index !== 0}
              onClose={() => handleClose(tag)}
            >
              <span onDoubleClick={e => handleInputEdit(e, index, tag)}>
                {tag.length > 10 ? `${tag.slice(0, 10)}...` : tag}
              </span>
            </Tag>
          </Tooltip>
        ) : (
            <Tag
              className="edit-tag"
              key={tag}
              color={tagsColorList[index % 10]}
              closable={true}
              onClose={() => handleClose(tag)}
            >
              <span onDoubleClick={e => handleInputEdit(e, index, tag)}>
                {tag.length > 10 ? `${tag.slice(0, 10)}...` : tag}
              </span>
            </Tag>
          );
      })}

      {inputState.inputVisible ? (
        <Input
          // ref={saveInputRef}
          type="text"
          size="small"
          className="tag-input"
          value={inputState.inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          style={{ width: 100 }}
        />
      ) : (
          <Tag className="site-tag-plus" onClick={() => showInput()}>
            <PlusOutlined /> New Tag
          </Tag>
        )
      }
    </Form.Item>
  </>
}

export default forwardRef(TagsArea);