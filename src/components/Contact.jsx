import { Form, Input, message } from "antd";

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    message.success("Message sent! I'll get back to you soon 🚀");
    form.resetFields();
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-900 text-white px-6 py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-4">Contact Me</h2>
        <p className="text-center text-slate-400 mb-10">Have a project in mind? Let's talk!</p>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label={<span className="text-slate-300">Name</span>} rules={[{ required: true }]}>
            <Input placeholder="Your name" className="bg-slate-800 text-white border-slate-600" />
          </Form.Item>
          <Form.Item name="email" label={<span className="text-slate-300">Email</span>} rules={[{ required: true, type: "email" }]}>
            <Input placeholder="your@email.com" className="bg-slate-800 text-white border-slate-600" />
          </Form.Item>
          <Form.Item name="message" label={<span className="text-slate-300">Message</span>} rules={[{ required: true }]}>
            <Input.TextArea rows={5} placeholder="Your message..." className="bg-slate-800 text-white border-slate-600" />
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </Form.Item>
        </Form>

        <div className="flex justify-center gap-6 mt-8 text-slate-400">
          <a href="mailto:lydie@email.com" className="hover:text-purple-400 transition">📧 lydie@email.com</a>
          <a href="https://github.com" className="hover:text-purple-400 transition">🐙 GitHub</a>
          <a href="https://linkedin.com" className="hover:text-purple-400 transition">💼 LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
