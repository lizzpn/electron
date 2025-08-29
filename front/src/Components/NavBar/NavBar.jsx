import { NavLink } from "react-router-dom";
import { Container, NavTitle, NavLinks } from "./style";
import logo from "../../assets/icons/Logo.png";
import logo_petee from "../../assets/icons/Logo_petee.png";

export default function NavBar() {
    return(
        <div style={{ paddingBottom: "30px" }}>
            <Container>

                <NavTitle>
                    <NavLink>
                        <img 
                            src={logo_petee} 
                            alt="Logo " 
                            style={{ width: "45px", height: "40px", objectFit: "cover" }} 
                        />
                    </NavLink>
                    <NavLink>
                        <img 
                            src={logo} 
                            alt="Logo Ecocreator" 
                            style={{ width: "90px", height: "40px", objectFit: "cover" }} 
                        />
                        <span>Chronos Web</span>
                    </NavLink>
                </NavTitle>
                <NavLinks>
                    <NavLink to="/cronometro">Cronômetro</NavLink>
                    <NavLink to="/classificacao">Ranking</NavLink>
                    <NavLink to="/equipes">Equipes</NavLink>
                    <NavLink to="/sorteio">Sorteio</NavLink>
                </NavLinks>
            </Container>
        </div>
    )
}