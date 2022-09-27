import { useNavigate } from 'react-router-dom'
import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx'

const DirectoryItem = (category) => { 
  const navigate = useNavigate();

  const onNavigateHandler = (title) => navigate(`/${title}`)

  return(
    <DirectoryItemContainer onClick={() => (navigate(`/shop/${category.title}`))}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
)}

export default DirectoryItem