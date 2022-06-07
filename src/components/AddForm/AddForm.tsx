import './addForm.css'
import {SyntheticEvent, useState} from "react";
import {geocode} from "../../utils/geocoding";

export const AddForm = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: '',
    });

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {

            const {lat, lon} = await geocode(form.address);

            const res = await fetch('http://localhost:3001/ad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                })
            })
            const data = await res.json();

        } finally {
            setLoading(false)
        }

    };


    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <form action="" className={"add__form"} onSubmit={saveAd}>
            <h1>add new ads!</h1>
            <label>
                Name: <br/>
                <input
                    type="text"
                    name="name"
                    maxLength={99}
                    required
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
            </label>
            <label>
                Description: <br/>
                <textarea
                    name="description"
                    maxLength={9999}
                    required
                    value={form.description}
                    onChange={e => updateForm('description', e.target.value)}
                />
            </label>
            <label>
                Price: <br/>
                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={e => updateForm('price', e.target.value)}
                />
            </label>
            <label>
                Address URL: <br/>
                <input
                    type="url"
                    name="url"
                    maxLength={99}
                    value={form.url}
                    onChange={e => updateForm('url', e.target.value)}
                />
            </label>
            <label>
                Address: <br/>
                <input
                    type="text"
                    name="address"
                    maxLength={99}
                    required
                    value={form.address}
                    onChange={e => updateForm('address', e.target.value)}
                />
            </label>
            <button>Submit</button>
        </form>

    )
}