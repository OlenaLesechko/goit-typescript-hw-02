import css from './SearchBar.module.css';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FiSearch } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { FC } from "react";

interface SearchBarProps {
    onSearch: (searchQuery: string) => void;
}

const searchBarSchema = Yup.object().shape({
    query: Yup.string()
        .min(1, 'Too short!')
        .max(10, 'Too long!')
        .required('Required!'),
});

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {

    const notify = (message: string): string => toast.error(message);

    return (
        <header className={css.header}>
        <Formik
            initialValues={{ query: '' }}
            validationSchema={searchBarSchema}
            onSubmit={(values: { query: string }, actions: FormikHelpers<{ query: string }>) : any => {
            if (!values.query.trim()) {
                return notify('Can not be empty');
            }
            onSearch(values.query);
            actions.resetForm();
            }}
        >
            <Form className={css.form}>
            <div className={css.inputWrap}>
                <Field
                name="query"
                className={css.input}
                type="text"
                placeholder="Search images and photos"
                autoComplete="off"
                autoFocus
                />
                <button type="submit" className={css.btn}>
                <FiSearch size="16px" />
                </button>
            </div>
            <ErrorMessage className={css.error} name="query" />
            </Form>
        </Formik>
        </header>
    );
}

export default SearchBar;