"use client";
import { useState } from "react";

export default function SelectSearch() {
  const [unit, setUnit] = useState("");
  return (
    <select
      id="unit"
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="rounded p-2.5 bg-[var(--bg-inputs)] text-center text-[var(--text-input)] justify-end items-center"
    >
      <option value="name">NOME</option>
      <option value="cpf">CPF</option>
      <option value="sus">SUS</option>
      <option value="mother">NOME DA MÃE</option>
    </select>
  );
}
