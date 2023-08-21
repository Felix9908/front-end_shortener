import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { ProfilePic } from "./common/ProfilePic.jsx";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./common/MoonIcon";
import {SunIcon} from "./common/SunIcon";

export default function App() {
    return (
        <Navbar>
            <NavbarBrand>
                <ProfilePic />
                <p className="font-bold text-inherit">Acortador X</p> {/* TODO AGREGAR SOPORTE PARA LENGUAJE*/}
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page" color="secondary">
                        Estadisticas
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Acortar
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent>
                <NavbarItem>
                    <Switch
                        defaultSelected
                        size="lg"
                        color="secondary"
                        thumbIcon={({ isSelected, className }) =>
                        isSelected ? (<SunIcon className={className}/>) : (<MoonIcon className={className} />)
                    }>
                    </Switch>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="../assets/images/common/profileExample.jpeg"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Bienvenido</p>
                            <p className="font-semibold">Jhon Doe</p>
                        </DropdownItem>
                        <DropdownItem key="settings">Configurar perfil</DropdownItem>
                        <DropdownItem key="team_settings">Mi equipo</DropdownItem>
                        <DropdownItem key="analytics">Mis Analíticas</DropdownItem>
                        <DropdownItem key="system">Analíticas Globales</DropdownItem>
                        <DropdownItem key="help_and_feedback">Ayuda</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Cerrar sesión
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}