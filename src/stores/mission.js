export default {
    namespaced: true,
    state: {
      missions: [],
    },
    mutations: {
      setMissions(state, missions) {
        state.missions = missions;
      },
      setMissionJoined(state, { missionId, joined }) {
        const mission = state.missions.find((m) => m.mission_id === missionId);
        if (mission) {
          mission.joined = joined;
        }
      },
    },
    actions: {
      async fetchMissions({ commit }) {
        const apiUrl = "http://127.0.0.1:6300/mission/active";
        const response = await axios.get(apiUrl);
        const missions = response.data.data.missions.map((m) => ({
          ...m,
          joined: false,
        }));
        commit("setMissions", missions);
      },
      async joinChallenge({ commit }, { missionId }) {
        const apiUrl = `http://127.0.0.1:6300/mission/${missionId}/join`;
        await axios.post(apiUrl);
        commit("setMissionJoined", { missionId, joined: true });
      },
    },
    getters: {
      getMissionById: (state) => (id) =>
        state.missions.find((m) => m.mission_id === id),
    },
  };
  