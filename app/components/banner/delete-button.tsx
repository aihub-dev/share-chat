import { fetcher } from "@/lib/utils";
import useSWR, { mutate } from "swr";
import { useEffect, useRef, useState } from "react";
import { LoadingCircle } from "@/components/shared/icons";
import { Trash } from "lucide-react";
import { useRouter } from "next/router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shared/tooltip";
import Cookies from "js-cookie";
import DeleteInfoModal from "../layout/delete-info-modal";

export default function DeleteButton() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const { data } = useSWR<{
    ttl: number;
  }>(`/api/conversations/${id}/ttl`, fetcher);

  const [ttl, setTtl] = useState(data?.ttl || 0);

  useEffect(() => {
    if (ttl === 0) {
      return;
    }
    const timerId = setInterval(() => {
      setTtl((prevTtl) => prevTtl - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [ttl]);

  const [submitting, setSubmitting] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!Cookies.get("dismissedDeleteButtonModal") && ttl > 0) {
      ref?.current?.focus();
      // TODO：后面多了可以加回来
      // setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger
            ref={ref}
            onClick={() => {
              setSubmitting(true);
              fetch(`/api/conversations/${id}/delete`, {
                method: "DELETE",
              }).then(() => {
                router.push("/");
              });
            }}
            disabled={submitting}
            className={`${
              submitting ? "cursor-not-allowed" : ""
            } p-2 flex flex-col space-y-1 items-center rounded-md w-12 hover:bg-gray-100 active:bg-gray-200 transition-all`}
          >
            {submitting ? (
              <LoadingCircle />
            ) : (
              <Trash className="h-4 w-4 text-gray-600" />
            )}
            <p className="text-center text-gray-600 text-sm">{ttl}秒</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>你还有 {ttl}秒可以删除这段对话</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DeleteInfoModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
