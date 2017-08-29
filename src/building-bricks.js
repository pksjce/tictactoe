import React from 'react'
import styled from 'styled-components'

export const Grid = styled.div`
  width: 300px;
  height: 300px;
  border-top: 1px solid black;
  border-left: 1px solid black;
`

export const GridRow = styled.div`
  height: 100px;
  width: 300px;
  border-bottom: 1px solid black;
  display:flex;
`

export const GridColumn = styled.div`
  width: 100px;
  height: 100px;
  border-right: 1px solid black;
`;
