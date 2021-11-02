export const getInitials = (player) => {
  return player.name.split(/\s+/).map((s) => s.substring(0, 1));
}
