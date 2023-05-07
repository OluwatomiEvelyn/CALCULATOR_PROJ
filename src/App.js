import { useState } from 'react';
import './App.css';
function App() {
  const[grace,setGrace]=useState([0])
  const [border,setBorder]=useState('none')
  const[sign,setSign]=useState('')
  const[previous,setOld]=useState([])
  const[flex,setFlex]=useState()
  const[one,setOne]=useState('hsl(6, 63%, 50%)')
  const[two,setTwo]=useState()
  const[three,setThree]=useState()
  const[cap,setCap]=useState()
  const[sip,setSip]=useState()
  const[table,setTable]=useState()
  const[rep,setRep]=useState()
  const[color,setColor]=useState()
  const[peace,setPeace]=useState()
  const[uriel,setUriel]=useState()
  const[theme,setTheme]=useState()
  const[deep,setDepth]=useState()
  const[themex,setThemex]=useState()
  const[sea,setSea]=useState()
  const[ice,setIce]=useState('')
  const[water,setWater]=useState()
  const[air,setAir]=useState()
  function bit(){
    setOne('hsl(6, 63%, 50%)')
    //setBorder('1px solid rgb(24, 32, 52)')
    setTwo('inherit')
    setThree('inherit')
    setCap('hsl(6, 63%, 50%)')
    setSip('white')
    setTable('hsl(224, 36%, 15%)')
    setRep('hsl(225, 21%, 49%)')
    setColor('hsl(222, 26%, 31%)')
    setPeace('hsl(224, 36%, 15%)')
    setUriel('hsl(224, 36%, 15%)')
    setTheme('hsl(30, 25%, 89%')
    setDepth('hsl(30, 25%, 89%')
    setSea('hsl(30, 25%, 89%)')
    setThemex('black')
    setIce('0 3px 4px hsl(6, 70%, 34%)')
    setWater('0 3px 4px hsl(224, 28%, 35%)')
    setAir('0 3px 4px hsl(30, 25%, 89%)')
  }
  function cit(){
    setBorder('none')
    setOne('inherit')
    setTwo('hsl(6, 63%, 50%)')
    setThree('inherit')
    setRep('hsl(185, 42%, 37%)')
    setCap('hsl(25, 98%, 40%)')
    setTable('hsl(0, 5%, 81%)')
    setColor('hsl(0, 0%, 90%')
    setPeace('hsl(0, 0%, 93%)')
    setUriel('hsl(0, 5%, 81%)')
    setTheme('black')
    setThemex('black')
    setSip('hsl(45, 7%, 89%)')
    setDepth('')
    setIce('0 3px 4px hsl(25, 99%, 27%')
    setAir('0 3px 4px hsl(0, 0%, 90%')
  }
  function fit(){
    //setBorder('1px solid rgb(29, 9, 52)')
    setOne('inherit')
    setTwo('inherit')
    setThree('hsl(6, 63%, 50%)')
    setTheme('hsl(52, 100%, 62%)')
    setUriel('hsl(268, 71%, 12%')
    setPeace('hsl(268, 71%, 12%')
    setColor('hsl(268, 75%, 9%)')
    setTable('hsl(268, 71%, 12%')
    setCap('hsl(176, 100%, 44%)')
    setRep('hsl(268, 47%, 21%)')
    setSip('hsl(281, 89%, 26%)')
    setDepth('white')
    setThemex('hsl(52, 100%, 62%)')
    setSea('black')
    setIce('0 3px 4px hsl(177, 92%, 70%')
    setAir('0 3px 4px hsl(285, 91%, 52%)')
  }
  function calculate(e){
    const key= e.target
    const action= key.dataset.action
    const keyContent= key.textContent
    if (!action){
      if (!sign){
        if (grace[0] === 0){
          setGrace(keyContent)
          }
          else{
            setGrace([...grace,keyContent])
          }
      }
      else{
        setOld([...previous,keyContent])
      }
      
    }
    else if (action) {
      if ( action ==='decimal'){
        if(!sign)
          setGrace([...grace,keyContent])
        else{
          setOld([...previous,keyContent])
        }

      }
      else if ( action ==='add'){
        setSign('+')
        //console.log(sign)
        setFlex('column-reverse')
      }
      else if (action ==='subtract'){
        setSign(keyContent)
        setFlex('column-reverse')
        console.log(sign)
      }
      else if (action ==='division'){
        setSign('/')
        setFlex('column-reverse')
      }
      else if  (action==='multiply'){
        setSign('x')
        setFlex('column-reverse')
      }
      else if (action ==='reset'){
        setGrace([0])
        setSign('')
        setFlex('column')
        setOld([''])
      }
      else if (action ==='delete'){
        if (!sign){
          grace.pop()
          setGrace([...grace])
        }
        else{
          previous.pop()
          setOld([...previous])
        }

      }
      else if(action ==='equal'){
        const value = grace.toString()
        const rep =parseFloat(value.replace(/,/g, ''),10)
        const second= previous.toString()
        const xsecond= parseFloat(second.replace(/,/g, ''),10)
        //const result = rep / xsecond;
        //console.log(result)
        if (sign === '-'){
          const result = rep - xsecond;
          setGrace(result)
          setFlex('column')
          setSign([''])
          setOld([''])
        }
        else if (sign === '+'){
          const result = rep + xsecond;
          setGrace(result)
          setFlex('column')
          setSign([''])
          setOld([''])
        }
        else if (sign === '/'){
          const result = rep / xsecond;
          setGrace(result)
          setFlex('column')
          setSign([''])
          setOld([''])
        }
        else if (sign === 'x'){
          const result = rep * xsecond;
          setGrace(result)
          setFlex('column')
          setSign([''])
          setOld([''])
        }
      }
    }
  }
  return (
    <div style={{backgroundColor:color}} className="App">
      <main>
        <header>
          <h1 style={{color:theme}}>calc</h1>
          <span style={{color:theme}}>THEME</span>
          <aside>
            <ul>
              <li style={{color:theme}}>1</li>
              <li style={{color:theme}}>2</li>
              <li style={{color:theme}}>3</li>
            </ul>
          </aside>
          <section>
            <ul style={{backgroundColor:uriel}}>
              <li onClick={bit}  style={{backgroundColor:one}}></li>
              <li onClick={cit} style={{backgroundColor:two}}></li>
              <li onClick={fit} style={{backgroundColor:three}}></li>
            </ul>
          </section>
        </header>
        <div className='peace' style={{backgroundColor:peace, color:theme,flexDirection:flex, border:border}}>
          <p>{previous}</p>
          <p>{sign}</p>
          <p id='range'>{grace}</p>
        </div>
        <table onClick={calculate} style={{backgroundColor:table}}>
          <tr>
            < td  style={{backgroundColor:sip,color:themex, boxShadow:air}}>7</ td>
            < td style={{backgroundColor:sip,color:themex,boxShadow:air }}>8</ td >
            < td style={{backgroundColor:sip,color:themex, boxShadow:air}}>9</ td >
            < td data-action='delete' style={{backgroundColor:rep, color:deep, boxShadow:water}} id='del'>Del </td>
          </tr>
          <tr>
            < td style={{backgroundColor:sip, color:themex, boxShadow:air}}>4</ td >
            < td style={{backgroundColor:sip, color:themex, boxShadow:air}}>5</ td >
            < td style={{backgroundColor:sip, color:themex, boxShadow:air}}>6</ td >
            < td data-action='add' style={{backgroundColor:sip, color:themex, boxShadow:air}}> + </ td >
          </tr>
          <tr>
            < td style={{backgroundColor:sip, color:themex, boxShadow:air}}>1</ td >
            < td style={{backgroundColor:sip, color:themex, boxShadow:air}}>2</ td >
            < td style={{backgroundColor:sip, color:themex, boxShadow:air}}>3</ td >
            < td data-action='subtract' style={{backgroundColor:sip, color:themex, boxShadow:air}}>-</ td >
          </tr>
          <tr>
            < td style={{backgroundColor:sip, color:themex, boxShadow:air}}>0</ td>
            < td data-action='decimal' style={{backgroundColor:sip, color:themex, boxShadow:air}}>.</ td >
            < td data-action='division' style={{backgroundColor:sip, color:themex, boxShadow:air}}> / </ td >
            < td data-action='multiply' style={{backgroundColor:sip, color:themex, boxShadow:air}}> x </ td>
          </tr>
          <tr>
            < td data-action='reset' style={{backgroundColor:rep, color:deep, boxShadow:water}} id='del' colSpan={2}>RESET</ td >
            < td data-action='equal' style={{backgroundColor:cap, color:sea, boxShadow:ice}} id='red' colSpan={2}>  = </ td >
          </tr>
        </table>
      </main>
    </div>
  );
}

export default App;
