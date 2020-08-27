import React from 'react';
import styles from './styles.module.sass';

export const Input = ({ input, meta, ...rest }) => (
  <div>
    <div>
      <input
        className={(meta.touched && meta.error) ? styles.error : ''}
        {...input}
      />
    </div>
    <div>
      {meta.touched && meta.error
                && <span className={styles.spanError}>{meta.error}</span>}
    </div>
  </div>
);
