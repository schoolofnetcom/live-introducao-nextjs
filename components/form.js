import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const handleChange = (e) => {
        const { target: { value, name } } = e;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(form)
    };

    const postData = async (form) => {
        try {
            const res = await fetch('/api/notes/create', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if (!res.ok) {
                console.log('RESPONSE ERROR');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
                <button type="submit" className="btn">
                    Submit
                </button>                
            </form>                
        </>
    );
}

export default Form;