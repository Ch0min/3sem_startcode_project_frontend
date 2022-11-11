import {useEffect, useState} from "react";
import {Row, Col, Image} from 'react-bootstrap';

function Jokes({facade}) {
    const [cnJoke, setCNJoke] = useState({cnJoke: "", cnJokeReference: ""})
    const [dadJoke, setDadJoke] = useState({dadJoke: "", dadJokeReference: ""})

    console.log(facade)

    const updateJokes = (data) => {
        console.log('data', data)
        setCNJoke({cnJoke: data.cnJoke, cnJokeReference: data.cnJokeReference})
        setDadJoke({dadJoke: data.dadJoke, dadJokeReference: data.dadJokeReference})
    }

    useEffect(() => {
        facade.fetchData('jokes', updateJokes)
    }, [facade])

    return (
        <>
            <Row className="mt-4">
                <Col>
                    <h3>Chuck Norris Joke:</h3>
                    <h5 className="cnJoke">{cnJoke.cnJoke}</h5>
                    <p>
                        Reference: <a href={cnJoke.cnJokeReference}>{cnJoke.cnJokeReference}</a>
                    </p>
                </Col>

                <Col>
                    <h3>Dad Joke:</h3>
                    <h5 className="dadJoke">{dadJoke.dadJoke}</h5>
                    <p>
                        Reference: <a href={dadJoke.dadJokeReference}>{dadJoke.dadJokeReference}</a>
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default Jokes