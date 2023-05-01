import LogoFiap from '../../../../assets/logo-fiap.svg'
import LogoPlusoft from '../../../../assets/logo-plusoft.svg'
import LogoTopa from '../../../../assets/logo-topa.svg'
import { BrandsContainer } from './style'

export function Brands() {
    return (
        <BrandsContainer data-aos="fade-right">
            <img src={LogoFiap} alt="LogoFiap" />
            <img src={LogoPlusoft} alt="LogoPlusoft" />
            <img src={LogoTopa} alt="LogoTopa" />
        </BrandsContainer>

    )
}