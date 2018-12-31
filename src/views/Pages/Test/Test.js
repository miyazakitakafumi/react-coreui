import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Col, Container, Row} from 'reactstrap'
import {changeValue} from "../../../modules/test"
import styled from 'styled-components'

const ValueSpan = styled.span`
    font-size: 2rem;
    color: crimson;
`

class Test extends Component {

    render() {
        const {value} = this.props
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md='6' className={'text-center'}>
                            <ValueSpan>{value}</ValueSpan>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="6" className="text-center">
                            <Button color='primary' onClick={() => this.props.clickButton(1)}>+</Button>
                        </Col>
                        <Col md="6" className="text-center">
                            <Button color='danger' onClick={() => this.props.clickButton(-1)}>-</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.test.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickButton: value => {
            dispatch(changeValue(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
