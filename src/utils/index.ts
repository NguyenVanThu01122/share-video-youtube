
import { useRouter } from "next/navigation";

export function getLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
}

export function setLocalStorage(key: string, value: any) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
}

export function removeLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
}


