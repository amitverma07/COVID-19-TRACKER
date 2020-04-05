import  React  from  'react' ;
import  {  Container ,  Grid  }  from  '@material-ui/core' ;
import  InffectedCountryCard  from  '../affectedCountry/InffectedCountries' ;
export  default  function  InffectedCountryList ( { inffectedCountries , updatedAt } )  {
  return  (
    < Container >
      < h1  style = { {  marginBottom : '0'  } } > Infected countries List </ h1>
      < p  style = { {  color : '# 0e5077' ,  marginTop : '0'  } } > Updated to {updatedAt} </ p>
      < Grid  spacing = { 1 }  container >
        { inffectedCountries.map ( country  =>  (
          < Grid  key = {country.country_name}  lg = { 6 }  item >
            < InffectedCountryCard  {...country} />
          </ Grid>
        ) ) }
      </ Grid>
    </ Container>
  ) ;
}