import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types'


export function CardEquipe(props) {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            width: "10px",
            height: "10px",
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));
    return (
        <div className="container-card-equipe">
            <div>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src={props.imageEquipe} sx={{width: "72px", height: "72px", filter: "var(--image-shadow-01)"}}/>
                </StyledBadge>
            </div>
            <div className="container-text-equipe">
                <h4>{props.nome}</h4>
                <p>{props.funcao}</p>
                <a href="">{props.email}</a>
            </div>
        </div>
    )
}

CardEquipe.propTypes = {
    imageEquipe: PropTypes.string,
    nome: PropTypes.string,
    funcao: PropTypes.string,
    imageEquipe: PropTypes.object,
}