export default function App() {
  return (
    <div style={{padding:20}}>
      <h1 style={{color:'#FF8200'}}>Vol Summit RCM Dashboard</h1>
      <p>Revenue Cycle Workflow Intelligence</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16,marginTop:20}}>
        <div style={{background:'#4B4B4B',padding:16}}>Denial Rate: 14%</div>
        <div style={{background:'#4B4B4B',padding:16}}>Claims at Risk: 27</div>
        <div style={{background:'#4B4B4B',padding:16}}>Missing Auth: 12</div>
        <div style={{background:'#4B4B4B',padding:16}}>Clean Claim Rate: 82%</div>
      </div>
    </div>
  )
}
