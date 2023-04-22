import { Button, Form, Input, Modal, Select } from "antd";
import { duplAuthors } from "../../mockData/authors";
import { ITask, priority, status } from "../../mockData/tasks";
import { useAppDispatch } from "../../hooks/hooks";
import {
  deleteTaskAsync,
  getTasks,
  resetSelectedTask,
  setModalType,
  updateTaskAsync,
} from "../../store/tasksSlice";
const { TextArea } = Input;

type IProps = {
  modalType: "new_task" | "update_task";
  selectedTask: ITask | null;
};

const ModalForUpdateTask = ({ modalType, selectedTask }: IProps) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const handleCancel = () => {
    dispatch(resetSelectedTask());
    dispatch(setModalType(null));
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    values["id"] = selectedTask?.id;
    values["schedule"] = selectedTask?.schedule;
    // @ts-ignore
    await dispatch(updateTaskAsync(values));
    dispatch(getTasks());
    handleCancel();
  };

  return (
    <Modal
      title={selectedTask?.title}
      open={modalType === "update_task"}
      width={450}
      footer={null}
      onCancel={handleCancel}
      style={{ top: "20px" }}
    >
      <Form
        name="updated_form"
        className="login-form"
        initialValues={selectedTask ? selectedTask : {}}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Введите заголовок задания!",
            },
          ]}
          className={"hidden-el"}
        >
          <>
            <div>Название</div>
            <Input
              placeholder="Название"
              size="middle"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                form.setFieldValue("title", e.target.value);
                form.validateFields();
              }}
              defaultValue={selectedTask?.title}
            />
          </>
        </Form.Item>
        <Form.Item
          name="author_name"
          rules={[{ required: true, message: "Назначьте исполнителя" }]}
        >
          <>
            <div>Исполниель</div>
            <div className="aditional-elem">{selectedTask?.author_name}</div>
            <Select
              style={{ width: "100%" }}
              placeholder={"Выберите исполнителя"}
              optionFilterProp="children"
              onChange={(value) => {
                form.setFieldValue("author_name", value);
                form.validateFields();
              }}
              options={duplAuthors}
              className={"hidden-el"}
              defaultValue={selectedTask?.author_name}
            />
          </>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ required: true, message: "Опишите задание" }]}
        >
          <>
            <div>Описание задачи</div>
            {<div className="aditional-elem">{selectedTask?.description}</div>}
            <TextArea
              showCount
              maxLength={300}
              style={{ height: 120, resize: "none" }}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                form.setFieldValue("description", e.target.value);
                form.validateFields();
              }}
              placeholder={"Опишите задачу"}
              defaultValue={selectedTask?.description}
              className={"hidden-el"}
            />
          </>
        </Form.Item>
        <Form.Item
          name="status"
          rules={[
            {
              required: true,
              message: "Назначьте состояние",
            },
          ]}
        >
          <>
            <div>Состояние</div>
            <Select
              style={{ width: "100%" }}
              placeholder={"Назначьте статус"}
              optionFilterProp="children"
              onChange={(value) => {
                form.setFieldValue("status", value);
                form.validateFields();
              }}
              options={status}
              defaultValue={selectedTask?.status}
            />
          </>
        </Form.Item>
        <Form.Item
          name="priority"
          rules={[{ required: true, message: "Назначьте приоритет" }]}
        >
          <>
            <div>Приоритет</div>
            <Select
              style={{ width: "100%" }}
              placeholder={"Назначьте приоритет"}
              optionFilterProp="children"
              onChange={(value) => {
                form.setFieldValue("priority", value);
                form.validateFields();
              }}
              options={priority}
              defaultValue={selectedTask?.priority}
            />
          </>
        </Form.Item>
        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "50px",
            }}
          >
            <Button
              type="primary"
              style={{ color: "white", backgroundColor: "#dd5a5a" }}
              className="login-form-button"
              size="middle"
              onClick={() => {
                if (selectedTask) {
                  // @ts-ignore
                  dispatch(deleteTaskAsync(selectedTask.id));
                  handleCancel();
                }
              }}
            >
              Удалить
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="middle"
              style={{ marginLeft: "20px" }}
            >
              Сохранить
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForUpdateTask;
