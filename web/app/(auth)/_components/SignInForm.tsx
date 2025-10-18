"use client";
import Link from "next/link";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";

export const SignInForm = () => {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl">Войдите в аккаунт</h1>

      <FloatLabel>
        <InputText id="email" placeholder="Email" />
        <label htmlFor="email">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="password" placeholder="Пароль" />
        <label htmlFor="password">Пароль</label>
      </FloatLabel>
      <div className="flex flex-col gap-4">
        <Button label="Войти" className="" />
        <Link
          href={"/sign-up"}
          className=" p-button p-button-help justify-center font-bold"
        >
          У меня еще нет аккаунта
        </Link>
      </div>
    </div>
  );
};
