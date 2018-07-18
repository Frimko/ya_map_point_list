import React from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

class FormPlacemark extends React.PureComponent {

  handleSubmit = (e) => {
    const { submit, form } = this.props;
    e.preventDefault();
    if (!form.getFieldError('new_mark') && form.getFieldValue('new_mark')) {
      submit(form.getFieldValue('new_mark'));
      form.resetFields();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem style={{ margin: 0 }}>
          {getFieldDecorator(
            'new_mark',
            {
              rules: [{
                min: 2,
                max: 30,
                whitespace: true,
                message: 'Введите больше 2ух, но не более 30и символов',

              }],
            },
          )(
            <Input placeholder="Новая точка маршрута"/>,
          )}
        </FormItem>
      </Form>
    );
  }
}

FormPlacemark.propTypes = {
  form: PropTypes.object,
  submit: PropTypes.func,
};

export default Form.create()(FormPlacemark);


