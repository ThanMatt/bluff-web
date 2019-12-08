import React, { useState } from 'react';
import { Button, Typography, Layout, Row, Col } from 'antd'
import CreateLobbyForm from '../../components/CreateLobbyForm'
import useForm from '../../utils/hooks/useForm'

const { Text, Title } = Typography

const Home = () => {

  const [visibleForm, setVisibleForm] = useState(false)
  const [title, setTitle] = useState('Welcome to Bluff!')

  const showCreateFormHandler = () => {
    setVisibleForm(true);
    setTitle('Create your lobby')
  }

  const hideCreateFormHandler = () => {
    setVisibleForm(false);
    setTitle('Welcome to Bluff!')
  }

  const defaultValues = {
    nickname: '',
    lobbyName: ''
  };

  const submitForm = () => {
    console.log(values)
  };

  const { values, handleChange, handleSubmit } = useForm(submitForm, defaultValues);

  return (
    <div className="home-layout">
      <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
        <Col style={{ textAlign: 'center' }}>
          <Title style={{ color: '#424242' }}>{title}</Title>
          {
            visibleForm ? null
              :
              <Text>A hilarious bluffing game</Text>
          }

          <br />
          {
            visibleForm
              ?
              <>
                <CreateLobbyForm
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
                <Button type="link" style={{ color: '#424242' }} onClick={() => hideCreateFormHandler()}>
                  <Text underline>
                    Cancel
                  </Text>
                </Button>
              </>
              :
              <Button
                type="primary"
                shape="round"
                size="large"
                style={{ marginTop: '2vh' }}
                onClick={() => showCreateFormHandler()}
              >
                Create a lobby
              </Button>
          }

          <br />
          <Button
            type="default"
            shape="round"
            size="large"
            style={{ marginTop: '2vh' }}
          >
            Join a lobby
            </Button>

        </Col>
      </Row>
    </div>
  );
}

export default Home;
