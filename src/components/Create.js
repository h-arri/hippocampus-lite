import {
  filterReminders,
  getRemindersApi,
} from '../store/actions/reminders';
import { DatePicker, Form, Input, message } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { createReminderApi } from '../store/actions/reminder';
import { PlusOutlined } from '@ant-design/icons';
import {
  StyledButton,
  StyledDatePicker,
  StyledForm, StyledFormItem, StyledInput,
  StyledModal,
} from './StyledAntComponents';

const CreateButton = styled(StyledButton)`
  width: 10vw;
  max-width: 90px;
  height: 7vw;
  max-height: 62px;
  background: #237673;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    background: #237673;
    border-color: #237673;
    color: white;
  }

  > h1 {
    color: white;
    font-size: 4vw;
    line-height: 0.6;
    margin: 4%;
  }
`;

const CreateModal = styled(StyledModal)`
  border: none;
`;

const Create = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(true);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const reminders = useSelector((state) => state.reminders.reminders);
  const reminder = useSelector((state) => state.reminder.reminder);
  const creating = useSelector((state) => state.reminder.loading);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    if (
      modalRef.current &&
      reminder.id &&
      reminders.find((r) => r.id === reminder.id) === undefined
    ) {
      message.success('Reminder created successfully!');
      dispatch(getRemindersApi());
      dispatch(filterReminders(filter));
    }
  }, [creating]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (e) => {
    form.validateFields().then((values) => {
      form.resetFields();
      dispatch(
        createReminderApi({
          description: values.desc,
          extra: values.extra,
          remindAt: moment(values.when.toLocaleString()).format(
            'YYYY-MM-DD hh:mm:ss'
          ),
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        })
      );
      setOpen(false);
    });
  };

  return (
    <>
      <CreateButton type="primary" size="large" onClick={handleOpen}>
        <PlusOutlined />
      </CreateButton>
      <CreateModal
        closable={false}
        centered
        visible={open}
        okText="Create"
        onOk={handleCreate}
        onCancel={handleClose}
        cancelButtonProps={{ danger: true }}
        confirmLoading={creating}
      >
        <Form
          form={form}
          name="reminder"
          layout={{ labelCol: { span: 4 }, wrapperCol: { span: 14 } }}
          initialValues={{ remember: true }}
          onFinish={handleCreate}
        >
          <StyledFormItem
            name="desc"
            rules={[
              {
                required: true,
                message: 'What you would like to do?',
              },
            ]}
          >
            <StyledInput placeholder="Description" size="large" />
          </StyledFormItem>
          <StyledFormItem
            name="when"
            rules={[
              {
                required: true,
                message: 'When you would like to do?',
              },
            ]}
          >
            <StyledDatePicker
              bordered={false}
              format="DD.MM.YYYY HH:mm"
              showTime={{
                defaultValue: moment('00:00:00', 'HH:mm:ss'),
              }}
              size="large"
            />
          </StyledFormItem>
          <StyledFormItem name="extra">
            <StyledInput.TextArea placeholder="Any tips?" />
          </StyledFormItem>
        </Form>
      </CreateModal>
    </>
  );
};

export default Create;
