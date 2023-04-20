import { Button, Form, Input, Modal, Select } from "antd";
import { duplAuthors } from "../../mockData/authors";
import { priority, status } from "../../mockData/tasks";
import moment from "moment";
import { useAppDispatch } from "../../hooks/hooks";
import { createTask, setModalType } from "../../store/tasksSlice";
const { TextArea } = Input;

const ModalForNewTask = ({
  modalType,
}: {
  modalType: "new_task" | "update_task";
}) => {
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const handleCancel = () => {
    dispatch(setModalType(null));
    form.resetFields();
  };

  const onFinish = (values: any) => {
    let time = moment();
    values["creation_time"] = time.format("YYYY-MM-DDThh:mm:ss");
    console.log(values);
    // @ts-ignore
    dispatch(createTask(values));
    handleCancel();
  };

  return (
    <Modal
      title={"Новая задача"}
      open={modalType === "new_task"}
      width={450}
      footer={null}
      onCancel={handleCancel}
      style={{ top: "20px" }}
    >
      <Form
        name="new_task_form"
        className="login-form"
        initialValues={{ remember: true }}
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
            />
          </>
        </Form.Item>
        <Form.Item
          name="author_name"
          rules={[{ required: true, message: "Назначьте исполнителя" }]}
        >
          <>
            <div>Исполниель</div>
            <Select
              style={{ width: "100%" }}
              placeholder={"Выберите исполнителя"}
              optionFilterProp="children"
              onChange={(value) => {
                form.setFieldValue("author_name", value);
                form.validateFields();
              }}
              options={duplAuthors}
            />
          </>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ required: true, message: "Опишите задание" }]}
        >
          <>
            <div>Описание задачи</div>
            <TextArea
              showCount
              maxLength={300}
              style={{ height: 120, resize: "none" }}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                form.setFieldValue("description", e.target.value);
                form.validateFields();
              }}
              placeholder={"Опишите задачу"}
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
              type="default"
              className="login-form-button"
              size="middle"
              onClick={handleCancel}
            >
              Отмена
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

export default ModalForNewTask;
