import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Col, Container, Row} from 'reactstrap'
import {changeValue} from "../../../modules/test"

class Test extends Component {
    render() {
        const {value} = this.props

        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md='6'>
                            {value}
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="6" className="">
                            <Button color='primary' onClick={() => this.props.clickButton(1)}>+</Button>
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
