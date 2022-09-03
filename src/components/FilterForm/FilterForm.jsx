import React from "react";
import css from './FilterForm.module.css';

export const FilterForm = ({onChange}) =>
        <label className={css.label_filter}>
            Find contact by Name:
            <input className={css.search_input} onChange={onChange}/>
    </label>