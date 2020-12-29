import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.scss';
import { Col, Row, Card } from 'react-bootstrap';

class Contact extends React.Component {
  render() {

    const { contact } = this.props;

    console.log(contact);

    return (

      <div className={styles.root}>
        <div >
          <h1>asdasd</h1>
          <Row>
            {contact && contact.map(item => (
              <Col xs={12} md={12} lg={6} key={item.id}>
                <Card className={styles.card}>
                  <div className={styles.innerBox}>
                    <img src={item.image} alt='zdjęcie ubrania' className={styles.img} />
                    <div className={styles.cardFront}>
                      <span className={styles.name}>{item.name}</span>
                    </div>
                    <div className={styles.cardBack}>
                      <p className={styles.profession}>{item.profession}</p>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  children: PropTypes.node,
  contact: PropTypes.array,
};

export default Contact;
