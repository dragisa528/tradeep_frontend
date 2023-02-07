import {
    Card,
    Button, Form,
    Row, Col, InputGroup
} from 'react-bootstrap';

import avar from 'assets/images/settings/avar.png';


export const Profile = () => {
    return (
        <div style={{ marginTop: 40 }}>
            <Row md={2} sm={2} xs={12} lg={2}>
                <Col>
                    <img style={{ float: 'left' }} src={avar} alt="avartar" />
                    <Form style={{ float: 'left', marginLeft: 20 }}>
                        <Form.Group>
                            <InputGroup style={{ marginBottom: 10 }}>
                                <Form.Control defaultValue='John' style={{ width: 250 }} type='text' name='first_name' /><br />
                                <Button size='sm'> <i style={{ margin: 0 }} className='feather icon-edit-2' /> </Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <InputGroup style={{ marginBottom: 10 }}>
                                <Form.Control defaultValue='Doe' style={{ width: 250 }} type='text' name='last_name' /><br />
                                <Button size='sm'> <i style={{ margin: 0 }} className='feather icon-edit-2' /> </Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <InputGroup style={{ marginBottom: 10 }}>
                                <Form.Control defaultValue='falcon.123@gmail.com' style={{ width: 250 }} type='email' name='email' /><br />
                                <Button size='sm'> <i style={{ margin: 0 }} className='feather icon-edit-2' /> </Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <InputGroup style={{ marginBottom: 10 }}>
                                <Form.Control defaultValue='+44 1234 5678 9' style={{ width: 250 }} type='text' name='phone' /><br />
                                <Button size='sm'> <i style={{ margin: 0 }} className='feather icon-edit-2' /> </Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <InputGroup>
                                <Form.Control defaultValue='Company: Trade Company' style={{ width: 250 }} type='text' name='country' />
                                <Button size='sm'> <i style={{ margin: 0 }} className='feather icon-edit-2' /> </Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <br />
            <Card>
                <Card.Body>
                    <Button size='sm' variant='secondary'> Reset Password </Button>
                    <Button size='sm' variant='secondary'> Verify Email </Button>
                    <Button size='sm' variant='success'> Save Changes </Button>
                </Card.Body>
            </Card>
        </div>
    )
}