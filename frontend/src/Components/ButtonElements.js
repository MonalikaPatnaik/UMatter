import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => 
    primary 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'transparent'
  };
  white-space: nowrap;
  color: ${({ dark }) => (dark ? '#fff' : '#fff')};
  padding: ${({ big }) => (big ? '16px 48px' : '14px 32px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: 600;
  outline: none;
  border: 2px solid ${({ primary }) => 
    primary 
      ? 'transparent' 
      : 'var(--accent-clr)'
  };
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ primary }) => 
    primary 
      ? '0 10px 25px -3px rgba(102, 126, 234, 0.3)' 
      : '0 4px 15px rgba(0, 0, 0, 0.1)'
  };

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ primary }) => 
      primary 
        ? '0 20px 40px -3px rgba(102, 126, 234, 0.4)' 
        : '0 15px 30px rgba(102, 126, 234, 0.3)'
    };
    background: ${({ primary }) => 
      primary 
        ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' 
        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };
    border-color: ${({ primary }) => 
      primary 
        ? 'transparent' 
        : 'transparent'
    };
  }

  &:active {
    transform: translateY(-1px);
  }

  @media screen and (max-width: 768px) {
    padding: ${({ big }) => (big ? '14px 40px' : '12px 28px')};
    font-size: ${({ fontBig }) => (fontBig ? '18px' : '14px')};
  }
`