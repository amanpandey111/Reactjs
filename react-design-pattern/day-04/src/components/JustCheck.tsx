import { useTheme } from '../hook/useTheme'
//! Just checking wheteher I will get the Provider value here or not
const JustCheck = () => {
    const result = useTheme();

  return (
    <div>JustCheck</div>
  )
}

export default JustCheck;
