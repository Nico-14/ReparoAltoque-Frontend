export default function Button({ children, onClick, secondary, className }) {
  return <button className={`py-2 px-3 rounded-md shadow ${!secondary ? 'bg-blue-600 text-white' : 'bg-white'} font-medium hover:opacity-75 ${className || ''}`} onClick={onClick}>{children}</button>
}