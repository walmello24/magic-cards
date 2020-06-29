import React, {useState} from 'react'
import {Form, Button, Col, Container} from 'react-bootstrap'

export default function Search({getCards, cardName}) {
    const [name, setName] = useState(null)
    const [effect, setEffect] = useState(null)
    const [colors, setColors] = useState({})

    const setColor = name => {
        colors[name] = !colors[name]
        setColors({...colors})
        console.log(convertedColors(colors))
    }

    const Checkbox = ({onClick, color}) => <>
        <Form.Check
            inline
            onClick={e => setColor(color)}
            checked={colors[color]}
            label={color}
        />
    </> 

    const convertedColors = () => {
        return Object.keys(colors)
            .filter(x => colors[x])
            .join(',')
    }

    const submitForm = (e) => {
        e.preventDefault();
        getCards({name, colors: convertedColors()})
    }

    return (
        <Form onSubmit={submitForm}>
            <Form.Row>
                <Col sm={4}>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="procurar por nome"/>
                </Col>
                <Col>
                    <Container>
                        <Checkbox color="red"/>
                        <Checkbox color="blue"/>
                        <Checkbox color="green"/>
                        <Checkbox color="white"/>
                        <Checkbox color="black"/>
                    </Container>
                </Col>
                <Button type="submit">Buscar</Button>
            </Form.Row>
        </Form>
    )
}
