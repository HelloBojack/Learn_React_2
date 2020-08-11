// slr 快捷键
import React, { useState, useEffect, useRef } from 'react';
import {
  Tag,
  Tooltip,
  Input
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const TagsArea = () => {
  const [refresh, setRefresh] = useState(false);
  const [inputState, setInputState] = useState({
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: '',
  })
  const inputRef = useRef()

  useEffect(() => {
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);

  const showInput = () => {
    let inputStateTemp = inputState
    inputStateTemp.inputVisible = true;
    setInputState(inputStateTemp)
    setRefresh(true)
    console.log(inputRef)
    // ()=> inputRef.current.focus()
  };
  const handleClose = () => {

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
  };

  return <>
    {inputState.tags.map((tag, index) => {
      if (inputState.editInputIndex === index) {
        return (
          <Input
            ref={this.saveEditInputRef}
            key={tag}
            size="small"
            className="tag-input"
            value={inputState.editInputValue}
            onChange={this.handleEditInputChange}
            onBlur={this.handleEditInputConfirm}
            onPressEnter={this.handleEditInputConfirm}
          />
        );
      }
      const tagElem = (
        <Tag
          className="edit-tag"
          key={tag}
          closable={index !== 0}
          onClose={() => handleClose(tag)}
        >
          <span
            onDoubleClick={e => {
              if (index !== 0) {
                this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                  this.editInput.focus();
                });
                e.preventDefault();
              }
            }}
          >
            {tag.length > 20 ? `${tag.slice(0, 20)}...` : tag}
          </span>
        </Tag>
      );
      return tag.length > 20 ? (
        <Tooltip title={tag} key={tag}>
          {tagElem}
        </Tooltip>
      ) : (
          tagElem
        );
    })}

    {inputState.inputVisible ? (
      <Input
        ref={inputRef}
        type="text"
        size="small"
        className="tag-input"
        value={inputState.inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
      />
    ) : (
        <Tag className="site-tag-plus" onClick={() => showInput()}>
          <PlusOutlined /> New Tag
        </Tag>
      )
    }

  </>
}

export default TagsArea;