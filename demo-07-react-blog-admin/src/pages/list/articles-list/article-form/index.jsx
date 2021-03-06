import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, FormattedMessage, formatMessage } from 'umi';
import React, { useState, useRef, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const ArticleForm = ({ dispatch, articleForm: { data }, loading }) => {
  useEffect(() => {
    // console.log(location)
    // console.log(match)
    dispatch({
      type: 'articleForm/fetch',
      payload: location.search.replace('?', '')
    });
    // console.log(data)
    // console.log(data.data)
    // console.log(data.data.title)
  }, []);
  // const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 7,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
      md: {
        span: 10,
      },
    },
  };
  const submitFormLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 10,
        offset: 7,
      },
    },
  };




  const onFinish = values => {
    const { dispatch } = props;
    dispatch({
      type: 'formAndarticleForm/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = changedValues => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageHeaderWrapper
    // content={<FormattedMessage id="formandbasic-form.article.description" />}
    >
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{
            marginTop: 8,
          }}
          form={form}
          name="basic"
          // initialValues={{
          //   public: '1',
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label="文章标题"
            name="title"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'formandbasic-form.title.required',
                }),
              },
            ]}
          >
            <Input
              // defaultValue={data.data.title}
              placeholder={formatMessage({
                id: 'formandbasic-form.title.placeholder',
              })}
            />
          </FormItem>
          {/* <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic-form.date.label" />}
            name="date"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'formandbasic-form.date.required',
                }),
              },
            ]}
          >
            <RangePicker
              style={{
                width: '100%',
              }}
              placeholder={[
                formatMessage({
                  id: 'formandbasic-form.placeholder.start',
                }),
                formatMessage({
                  id: 'formandbasic-form.placeholder.end',
                }),
              ]}
            />
          </FormItem> */}
          <FormItem
            {...formItemLayout}
            label="文章内容"
            name="content"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'formandbasic-form.goal.required',
                }),
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder={formatMessage({
                id: 'formandbasic-form.goal.placeholder',
              })}
              rows={4}
            >
              {/* {data.data.content} */}
            </TextArea >
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="文章简介"
            name="into"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'formandbasic-form.standard.required',
                }),
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              // placeholder={data.data.intro}
              rows={4}
            >
              {/* {data.data.into} */}
            </TextArea>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formandbasic-form.client.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic-form.form.optional" />
                  <Tooltip title={<FormattedMessage id="formandbasic-form.label.tooltip" />}>
                    <InfoCircleOutlined
                      style={{
                        marginRight: 4,
                      }}
                    />
                  </Tooltip>
                </em>
              </span>
            }
            name="client"
          >
            <Input
              placeholder={formatMessage({
                id: 'formandbasic-form.client.placeholder',
              })}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formandbasic-form.invites.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic-form.form.optional" />
                </em>
              </span>
            }
            name="invites"
          >
            <Input
              placeholder={formatMessage({
                id: 'formandbasic-form.invites.placeholder',
              })}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formandbasic-form.weight.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic-form.form.optional" />
                </em>
              </span>
            }
            name="weight"
          >
            <InputNumber
              placeholder={formatMessage({
                id: 'formandbasic-form.weight.placeholder',
              })}
              min={0}
              max={100}
            />
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic-form.public.label" />}
            help={<FormattedMessage id="formandbasic-form.label.help" />}
            name="publicType"
          >
            <div>
              <Radio.Group>
                <Radio value="1">
                  <FormattedMessage id="formandbasic-form.radio.public" />
                </Radio>
                <Radio value="2">
                  <FormattedMessage id="formandbasic-form.radio.partially-public" />
                </Radio>
                <Radio value="3">
                  <FormattedMessage id="formandbasic-form.radio.private" />
                </Radio>
              </Radio.Group>
              <FormItem
                style={{
                  marginBottom: 0,
                }}
                name="publicUsers"
              >
                <Select
                  mode="multiple"
                  placeholder={formatMessage({
                    id: 'formandbasic-form.publicUsers.placeholder',
                  })}
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">
                    <FormattedMessage id="formandbasic-form.option.A" />
                  </Option>
                  <Option value="2">
                    <FormattedMessage id="formandbasic-form.option.B" />
                  </Option>
                  <Option value="3">
                    <FormattedMessage id="formandbasic-form.option.C" />
                  </Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem
            {...submitFormLayout}
            style={{
              marginTop: 32,
            }}
          >
            <Button type="primary" htmlType="submit">
              <FormattedMessage id="formandbasic-form.form.submit" />
            </Button>
            <Button
              style={{
                marginLeft: 8,
              }}
            >
              <FormattedMessage id="formandbasic-form.form.save" />
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ articleForm, loading }) => ({
  articleForm,
  loading: loading.models.formAndarticleForm,
}))(ArticleForm);
