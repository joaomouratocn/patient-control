export function normalizeText(text: string): string {
  return text
    .normalize("NFD") // separa os caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "") // remove os diacríticos (acentos)
    .toUpperCase(); // converte para maiúsculas
}
