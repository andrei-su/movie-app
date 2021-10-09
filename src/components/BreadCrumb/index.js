import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Home from '@material-ui/icons/Home'
// Styles
import { Content, Wrapper } from './BreadCrumb.styles';

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <Home />
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
}

export default BreadCrumb