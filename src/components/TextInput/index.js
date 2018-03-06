import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { View, TextInput, StyleSheet } from 'react-native';

import debounce from 'lodash/debounce';

const InputField = (props) => {
  const debouncedOnChange = debounce((event) => {
    props.onTextEnter(event);
  }, 500);

  const renderInput = () => {
    return (
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={debouncedOnChange}
        {...props}
      />
    );
  };

  return (
    <View>
      <Field
        name="search"
        component={renderInput}
        placeholder="Search for an artist ..."
      >
      </Field>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#eee',
    color: 'black',
    padding: 5,
    marginTop: 8,
    marginBottom: 8
  }
});

InputField.propTypes = {
  onTextEnter: PropTypes.func,
};

export default reduxForm({ form: 'InputField' })(InputField);
