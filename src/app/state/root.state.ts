import {Action, State, StateContext} from "@ngxs/store";
import {RootStateModel} from "./root.state.model";
import {Injectable} from "@angular/core";
import {AddOperation} from "./root.action";

@State<RootStateModel>({
  name: 'root',
  defaults: {
    screen: ''
  }
})
@Injectable()
export class RootState {
  @Action(AddOperation)
  addOperation(ctx: StateContext<RootStateModel>, action: { operation: string }) {
    const state = ctx.getState();
    if (action.operation) {
      ctx.setState({screen: state.screen + action.operation})
    }
  }
}
