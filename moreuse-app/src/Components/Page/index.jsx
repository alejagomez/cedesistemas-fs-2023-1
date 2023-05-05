import { useLocation } from "react-router-dom"
import { Menu } from "../Menu"
import { Topbar } from "../Topbar"
import { PageContainer, PageTitleContainer } from "./styles"
import { useContext, useEffect } from "react"
import { MenuContext } from "../../Contexts/MenuContext"

export const Page = (props) => {

  //const location = useLocation();
  const { onCloseMenu } = useContext(MenuContext);

  useEffect(() => {
    console.log('estoy en una nueva pagina');
    hideMenu();
  }, []);

  const hideMenu = () => {
    onCloseMenu();
  }

  return (
    <PageContainer>
      <Topbar />
      {
        props.tittle && (
          <PageTitleContainer>
            <h1>{props.tittle}</h1>
          </PageTitleContainer>
        )
      }
      <div>
        {props.children}
      </div>
      <Menu />
    </PageContainer>
  )
}
