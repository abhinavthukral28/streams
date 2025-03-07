import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Title"></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        ></Field>
        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title || !formValues) {
    errors.title = "You must enter a title";
  }
  if (!formValues || !formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
export default reduxForm({
  form: "StreamForm",
  validate: validate,
})(StreamForm);
