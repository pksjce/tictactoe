import React from 'react';
import { render } from 'react-dom';
import {Grid, GridRow, GridColumn} from './building-bricks';
import {TicTacToe} from './tic-tac-toe';
import DrawSign from './draw-sign'

const App = () => (
  <TicTacToe board={(props) => (
    <Grid>
      <GridRow>
        <GridColumn>
          <DrawSign {...props} index={1} />
        </GridColumn>
        <GridColumn>
          <DrawSign {...props} index={2} />
        </GridColumn>
        <GridColumn>
          <DrawSign {...props} index={3}/>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <DrawSign {...props} index={4}/>
        </GridColumn>
        <GridColumn>
          <DrawSign {...props} index={5}/>
        </GridColumn>
        <GridColumn>
          <DrawSign {...props} index={6}/>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <DrawSign {...props} index={7}/>
        </GridColumn>
        <GridColumn>
          <DrawSign {...props} index={8}/>
        </GridColumn>
        <GridColumn>
          <DrawSign {...props} index={9}/>
        </GridColumn>
      </GridRow>
    </Grid>)} />
);

render(<App />, document.getElementById('root'));
