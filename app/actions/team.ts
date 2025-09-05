"use server"

import { getSessionFromCookies } from "@/lib/session"
import { getUser, addOrgMember, getOrg, removeOrgMember, setOrgSeats, updateOrgMember } from "@/lib/auth"
import { MAX_SEATS } from "@/lib/pricing-config"
import { revalidatePath } from "next/cache"

async function requireCompany() {
  const session = await getSessionFromCookies()
  if (!session?.email) return { error: "Not authenticated" as const }
  const user = await getUser(session.email)
  if (!user?.company) return { error: "No company on account" as const }
  return { company: user.company as string }
}

export async function getTeam() {
  const ctx = await requireCompany()
  if ("error" in ctx) return ctx
  const org = await getOrg(ctx.company)
  return { org }
}

export async function inviteMember(formData: FormData) {
  const ctx = await requireCompany()
  if ("error" in ctx) return ctx
  const email = String(formData.get("email") || "").trim()
  const role = String(formData.get("role") || "member")
  if (!email) return { error: "Email is required" }
  try {
    await addOrgMember(ctx.company, { email, role })
    revalidatePath("/dashboard/team")
    revalidatePath("/dashboard")
    return { success: true }
  } catch (e: any) {
    return { error: e?.message || "Failed to add member" }
  }
}

export async function removeMemberAction(formData: FormData) {
  const ctx = await requireCompany()
  if ("error" in ctx) return ctx
  const email = String(formData.get("email") || "").trim()
  if (!email) return { error: "Email is required" }
  try {
    await removeOrgMember(ctx.company, email)
    revalidatePath("/dashboard/team")
    revalidatePath("/dashboard")
    return { success: true }
  } catch (e: any) {
    return { error: e?.message || "Failed to remove member" }
  }
}

export async function updateMemberRoleAction(formData: FormData) {
  const ctx = await requireCompany()
  if ("error" in ctx) return ctx
  const email = String(formData.get("email") || "").trim()
  const role = String(formData.get("role") || "member")
  if (!email) return { error: "Email is required" }
  try {
    await updateOrgMember(ctx.company, email, { role })
    revalidatePath("/dashboard/team")
    return { success: true }
  } catch (e: any) {
    return { error: e?.message || "Failed to update role" }
  }
}

export async function setSeatsAction(formData: FormData) {
  const ctx = await requireCompany()
  if ("error" in ctx) return ctx
  const val = Number(formData.get("seats") || 1)
  if (!Number.isFinite(val) || val < 1) return { error: "Seats must be >= 1" }
  const clamped = Math.min(MAX_SEATS, Math.max(1, Math.floor(val)))
  try {
    await setOrgSeats(ctx.company, clamped)
    revalidatePath("/dashboard/team")
    revalidatePath("/dashboard/subscription")
    revalidatePath("/dashboard")
    return { success: true }
  } catch (e: any) {
    return { error: e?.message || "Failed to update seats" }
  }
}
