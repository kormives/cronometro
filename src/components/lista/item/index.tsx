import { ITarefa } from '../../../types/tarefa';
import style from './item.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa: selecionadoTarefa,
}: Props) {
  return (<li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
    onClick={() => selecionadoTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id,
    })}>
    <h3>
      {tarefa}
    </h3>
    <span>
      {tempo}
    </span>
  </li>);
}