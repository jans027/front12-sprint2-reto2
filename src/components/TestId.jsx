
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiUrl } from '../services/apirest'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { BootstrapButton, Button1, Container1 } from '../styles/TestId'

const TestId = () => {

    // .............Cargo Info test..........................
    const { id } = useParams()
    // console.log(id)

    const [testId, setTestId] = useState([])
    const [opcionesId, setOpcionesId] = useState([]);
    const [points, setPoints] = useState([])

    const [select, setSelect] = useState()
    const [error, setError] = useState(false)
    // const pints = points


    useEffect(() => {
        const obtenerDatos = async () => {
            const respuesta = await axios.get(ApiUrl + `quiz/${id}`)
            const curso = await respuesta.data;
            setTestId(curso);
            setOpcionesId(curso.opciones)
            setPoints(curso.points)
            console.log(curso.opciones)
        }
        obtenerDatos()
        
    }, [id])


    const clickRespuesta = ((item)=>{
        if(item.isCorrect === "true"){
            sessionStorage.setItem('coins', points)
            console.log('Correcto')
        }else if(item.isCorrect !== "true"){
            console.log('Falso')
        }
    })








    return (
        <div>
            <Container1>
            <ReactPlayer url={testId.video} controls />
            <p>{testId.descripcion}</p>
            <div>
                {error && <errorMessage>{error}</errorMessage>}
                {/* {options && options.map((i) =><button>{i}</button>)} */}
            </div>
            <div>
                    {
                        opcionesId.map(item => (
                            <BootstrapButton variant="outlined" onClick={(e) => clickRespuesta(item, e)}>
                                {item.textoRespuesta}
                            </BootstrapButton>
                        ))
                    }
                <Button1 size="large" variant="contained">Next</Button1>
            </div>
            </Container1>
        </div>
    )
}

export default TestId