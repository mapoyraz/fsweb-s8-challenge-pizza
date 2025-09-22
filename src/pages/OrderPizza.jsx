import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/OrderPizza.css";
import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Input, Label } from 'reactstrap';
import CheckBox from '../components/CheckBox';


export default function OrderPizza() {
    const formValues = {

        size: "",
        pastry: "",
        toppings: [],
        special: "",
    }

    const toppingsOptions = [
        { value: "mantar", label: "Mantar" },
        { value: "sosis", label: "Sosis" },
        { value: "biber", label: "Biber" },
        { value: "zeytin", label: "Zeytin" },
        { value: "pepperoni", label: "Pepperoni" },
        { value: "domates", label: "Domates" },
        { value: "sucuk", label: "Sucuk" },
        { value: "kanadajambonu", label: "Kanada Jambonu" },
        { value: "jalepano", label: "Jalepano" },
        { value: "ananas", label: "Ananas" },
        { value: "kabak", label: "Kabak" },
        { value: "sogan", label: "Soğan" },
        { value: "sarımsak", label: "Sarımsak" },
        { value: "avakado", label: "Avakado" },];

    const [formData, setFormData] = useState(
        formValues
    );
    function submitHandler(e) {
        e.preventDefault();
        if (!isToppingsValid) {
            alert(`En az ${minToppings}, en fazla ${maxToppings} malzeme seçmelisiniz.`);
            return;
        }
        axios.post("https://reqres.in/api/pizza", formData)
            .then((res) => {
                console.log("Siparişiniz alındı", res.data);
                setFormData(formValues);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            let newToppings = [...formData.toppings];
            if (checked) {

                newToppings.push(value);
            } else {

                newToppings = newToppings.filter((item) => item !== value);
            }
            setFormData({ ...formData, toppings: newToppings });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    const minToppings = 4;
    const maxToppings = 10;
    const toppingsCount = formData.toppings.length;
    const isToppingsValid = toppingsCount >= minToppings && toppingsCount <= maxToppings;

    return (
        <div>
            <header>
                <img src="images/iteration-1-images/logo.svg" alt="Logo" />
                <nav>
                    <a href="/">Anasayfa</a>
                    <a href="">Seçenekler</a>
                    <a href="/siparis">Sipariş Oluştur</a>
                </nav>
            </header>
            <h1>Position Absulute Acı Pizza</h1><span>4.9</span><span>(200)</span>
            <form onSubmit={submitHandler} action="">
                <Form>
                    <FormGroup tag="fieldset">
                        <legend>
                            Boyut Seç <span style={{ color: "red" }}>*</span>
                        </legend>
                        <div >
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="size"
                                        value="kucuk"
                                        checked={formData.size === "kucuk"}
                                        onChange={handleChange}
                                    />
                                    Küçük
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="size"
                                        value="orta"
                                        checked={formData.size === "orta"}
                                        onChange={handleChange}
                                    />
                                    Orta
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="size"
                                        value="buyuk"
                                        checked={formData.size === "buyuk"}
                                        onChange={handleChange}
                                    />
                                    Büyük
                                </Label>
                            </FormGroup>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="pastrySelect">
                            Hamur Seç <span style={{ color: "red" }}>*</span>
                        </Label>
                        <Input
                            id="pastrySelect"
                            name="pastry"
                            type="select"
                            value={formData.pastry}
                            onChange={handleChange}
                        >
                            <option value="">Seçiniz</option>
                            <option value="ince">İnce</option>
                            <option value="kalin">Kalın</option>
                        </Input>
                    </FormGroup>
                    {toppingsOptions.map((topping) => (
                        <CheckBox
                            key={topping.value}
                            changeFn={handleChange}
                            isChecked={formData.toppings.includes(topping.value)}
                            fieldname="toppings"
                            value={topping.value}
                            label={topping.label}
                            disabled={
                                !formData.toppings.includes(topping.value) &&
                                toppingsCount >= maxToppings
                            }
                        />
                    ))}
                </Form>

            </form>
            {!isToppingsValid && (
                <div style={{ color: "red", margin: "1rem 0" }}>
                    En az {minToppings}, en fazla {maxToppings} malzeme seçmelisiniz.
                </div>
            )}
        </div>
    );
};