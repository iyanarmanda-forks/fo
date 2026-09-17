import { Grid, Paper, Typography } from '@mui/material';

const reflectionText = `I learned about: 
1. how to use adjectivve and noun: A-なN ですねu / A-いN 
    Example: きれいな公園ですね / ひろい公園ですね.
2. how to read road sign or even stall/shop sign.

Also I learned new words like:
- 高い / たかい = high、
- 低い / ひくい = low
`;

function App() {
  return (
    <>
      <Grid style={{ height: '100%', width: '100%', position: 'absolute', maxHeight: '100%', maxWidth: '100%', overflow: 'hidden auto' }}>
        <Grid className="parent-content">
          <Grid className="actual-content">
            <Grid container direction="column">

              <Paper variant="outlined" className="p-24 mt-12 mb-12">
                <Typography variant="h6">
                  Before :
                </Typography>
                <Typography variant="body2">
                  {reflectionText}
                </Typography>
              </Paper>

              {/* Solution using `sx={{ whiteSpace: 'pre-wrap}}` */}
              <Paper variant="outlined" className="p-24 mt-12 mb-12">
                <Typography variant="h6">
                  After:
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                  {reflectionText}
                </Typography>
              </Paper>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App
