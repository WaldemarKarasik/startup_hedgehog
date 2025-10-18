"use client";
import Link from "next/link";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";

export const SignUpForm = () => {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl">Создайте аккаунт</h1>
      <FloatLabel>
        <InputText id="name" placeholder="Имя" />
        <label htmlFor="name">Имя</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="last-name" placeholder="Фамилия" />
        <label htmlFor="last-name">Фамилия</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="email" placeholder="Email" />
        <label htmlFor="email">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="password" placeholder="Пароль" />
        <label htmlFor="password">Пароль</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="repeat-password" placeholder="Введите пароль снова" />
        <label htmlFor="repeat-password">Введите пароль снова</label>
      </FloatLabel>
      <div className="flex flex-col gap-4">
        <Button label="Создать" className="" />
        <Link
          href={"/sign-in"}
          className=" p-button p-button-help justify-center font-bold"
        >
          У меня уже есть аккаунт
        </Link>
      </div>
    </div>
  );
};
