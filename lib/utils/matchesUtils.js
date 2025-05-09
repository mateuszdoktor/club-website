export function extractCompetitions(matches) {
  const seen = new Set();
  return matches
    .filter(({ competition }) => {
      if (seen.has(competition.code)) return false;
      seen.add(competition.code);
      return true;
    })
    .map(({ competition }) => ({
      name: competition.name,
      code: competition.code,
      logo: competition.emblem,
    }));
}

export function filterMatchesByCompetition(matches, code) {
  return matches.filter((m) => m.competition.code === code);
}

export function groupMatchesByMatchday(matches, groupSize = 6) {
  const sorted = matches
    .filter((m) => m.matchday != null)
    .sort((a, b) => a.matchday - b.matchday);
  const total = sorted.length;
  const remainder = total % groupSize;
  const result = [];

  let start = 0;
  if (remainder > 0) {
    const chunk = sorted.slice(0, remainder);
    const days = chunk.map((m) => m.matchday);
    result.push({
      matches: chunk,
      label: `Matchdays ${Math.max(...days)}–${Math.min(...days)}`,
    });
    start = remainder;
  }

  for (let i = start; i < total; i += groupSize) {
    const chunk = sorted.slice(i, i + groupSize);
    const days = chunk.map((m) => m.matchday);
    result.push({
      matches: chunk,
      label: `Matchdays ${Math.max(...days)}–${Math.min(...days)}`,
    });
  }

  return result.reverse();
}

export function normalizeStageName(stage) {
  return stage
    .toLowerCase()
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export function extractStagesForCompetition(matches, code) {
  const stages = new Set();
  matches.forEach((m) => {
    if (m.competition.code === code && m.stage) stages.add(m.stage);
  });
  return Array.from(stages);
}

export function filterMatchesByStage(matches, stage) {
  return matches.filter((m) => m.stage === stage);
}
