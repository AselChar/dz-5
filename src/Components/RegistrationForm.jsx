import React, { useState } from "react";

function RegistrationForm() {
    const initialFormData = {
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div style={{ width: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <h2>Регистрация пользователя</h2>
            <form>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="key1">Имя</label>
                    <input
                        type="text"
                        id="key1"
                        name="key1"
                        value={formData.key1}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="key2">Фамилия</label>
                    <input
                        type="text"
                        id="key2"
                        name="key2"
                        value={formData.key2}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="key3">Email адрес</label>
                    <input
                        type="email"
                        id="key3"
                        name="key3"
                        value={formData.key3}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="key4">Интересы</label>
                    <input
                        type="text"
                        id="key4"
                        name="key4"
                        value={formData.key4}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
                    />
                </div>
            </form>
            <div>
                <h3>Предварительный просмотр данных:</h3>
                <p>Имя: {formData.key1}</p>
                <p>Фамилия: {formData.key2}</p>
                <p>Email адрес: {formData.key3}</p>
                <p>Интересы: {formData.key4}</p>
            </div>
        </div>
    );
}

export default RegistrationForm;